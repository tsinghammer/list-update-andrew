import React, { useCallback, useContext, useState, useEffect } from 'react';
import {
  IColumn,
  buildColumns,
  mergeStyleSets,
} from 'office-ui-fabric-react/lib/index';

import { useConst } from '@uifabric/react-hooks';
import { ExternalTrade } from './types';
import { createListItems, updateItemsRandomly } from './utils';
import {
  DetailsList,
  DetailsListLayoutMode,
  IRenderFunction,
  IDetailsHeaderProps,
  Sticky,
  StickyPositionType,
  IContextualMenuProps,
  IContextualMenuListProps,
  SearchBox,
  DirectionalHint,
  ISearchBoxStyles,
  ContextualMenu,
  IDetailsRowProps,
  IDetailsRowStyles,
  DetailsRow,
} from '@fluentui/react';
import { NeutralColors, SharedColors } from '@uifabric/fluent-theme';
import { Update } from '../types';
import clsx from 'clsx';
import { AppContext } from '../../app/AppContext';

const ITEMS_COUNT: number = 200;

const defaultItems: ExternalTrade[] = createListItems(ITEMS_COUNT);

const renderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (
  props,
  defaultRender
) => {
  if (!props) {
    return null;
  }

  return (
    <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced>
      {defaultRender!({
        ...props,
      })}
    </Sticky>
  );
};

const wrapperStyle: React.CSSProperties = {
  borderBottom: `1px solid ${NeutralColors.gray100}`,
};
const searchBoxStyles: ISearchBoxStyles = {
  root: { margin: '8px' },
};

const classes = mergeStyleSets({
  cell: {
    height: '100%',
    marginTop: -11,
    marginBottom: -11,
    padding: 11,
  },
  up: {
    backgroundColor: SharedColors.redOrange10,
    color: NeutralColors.white,
  },
  down: {
    backgroundColor: SharedColors.greenCyan10,
    color: NeutralColors.white,
  },
});

export const TradesList: React.FunctionComponent = () => {
  const [{ updateIntervalInMilliSeconds }] = useContext(AppContext);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [sorted, setSorted] = useState<boolean | undefined>(true);
  const [sortedDescending, setSortedDescending] = useState<boolean | undefined>(
    true
  );
  const [filtered, setFiltered] = useState<boolean | undefined>(true);
  const [
    contextualMenuProps,
    setContextualMenuPros,
  ] = useState<IContextualMenuProps>();
  const [items, setItems] = useState(defaultItems);

  const onFilterChange = (
    event?: React.ChangeEvent<HTMLInputElement> | undefined,
    newValue?: string | undefined
  ) => {
    if (!newValue) {
      setFiltered(false);
    }
  };

  const renderMenuList = useCallback(
    (
      menuListProps: IContextualMenuListProps | undefined,
      defaultRender: IRenderFunction<IContextualMenuListProps> | undefined
    ) => {
      return (
        <div>
          {defaultRender && defaultRender(menuListProps)}
          <div style={wrapperStyle}>
            <SearchBox
              ariaLabel="Filter"
              placeholder="Filter markets"
              onAbort={() => setShowContextMenu(false)}
              onChange={onFilterChange}
              styles={searchBoxStyles}
            />
          </div>
        </div>
      );
    },
    []
  );

  const onSortColumn = (key: string | undefined, descending: boolean) => {
    setSorted(true);
    setSortedDescending(descending);
  };

  const getContextualMenuProps = (
    ev?: React.MouseEvent<HTMLElement>,
    column?: IColumn
  ): IContextualMenuProps => {
    const items = [
      {
        key: 'aToZ',
        name: 'A to Z',
        iconProps: { iconName: 'SortUp' },
        canCheck: true,
        checked: column?.isSorted && !column?.isSortedDescending,
        onClick: () => onSortColumn(column?.key, false),
      },
      {
        key: 'zToA',
        name: 'Z to A',
        iconProps: { iconName: 'SortDown' },
        canCheck: true,
        checked: column?.isSorted && column?.isSortedDescending,
        onClick: () => onSortColumn(column?.key, true),
      },
    ];
    return {
      items: items,
      target: ev?.currentTarget as HTMLElement,
      directionalHint: DirectionalHint.bottomLeftEdge,
      gapSpace: 10,
      isBeakVisible: true,
      onDismiss: () => setContextualMenuPros(undefined),
      onRenderMenuList: renderMenuList,
    };
  };

  const onColumnContextMenu = (
    column?: IColumn,
    ev?: React.MouseEvent<HTMLElement>
  ): void => {
    setContextualMenuPros(getContextualMenuProps(ev, column));
    setShowContextMenu(!showContextMenu);
  };

  const onColumnClick = (
    ev: React.MouseEvent<HTMLElement>,
    column: IColumn
  ): void => {
    setContextualMenuPros(getContextualMenuProps(ev, column));
    setShowContextMenu(!showContextMenu);
  };

  const onRenderRow: IRenderFunction<IDetailsRowProps> = (
    rowProps: IDetailsRowProps | undefined
  ): JSX.Element | null => {
    if (!rowProps) {
      return null;
    }

    const customStyles: Partial<IDetailsRowStyles> = {};
    const item = rowProps.item as ExternalTrade;
    if (item.updated) {
      customStyles.root = { backgroundColor: SharedColors.orangeYellow10 };
    }

    return <DetailsRow {...rowProps} styles={customStyles} />;
  };

  function renderItemColumn(
    item?: ExternalTrade,
    index?: number,
    column?: IColumn
  ) {
    const fieldContent = item?.[
      column?.fieldName as keyof ExternalTrade
    ] as string;
    const priceUpdate = item?.priceUpdate;
    const priceClass =
      priceUpdate !== Update.NoChange
        ? priceUpdate === Update.Up
          ? classes.up
          : classes.down
        : undefined;

    if (!column?.key) {
      return <span>{fieldContent}</span>;
    }

    switch (column.key) {
      case 'price':
        return (
          <div className={clsx(classes.cell, priceClass)}>{item?.price}</div>
        );

      default:
        return <span>{fieldContent}</span>;
    }
  }

  const columns: IColumn[] = useConst(() => {
    const currentItems = createListItems(1);
    const columns: IColumn[] = buildColumns(currentItems);
    for (const column of columns) {
      switch (column.key) {
        case 'market': {
          column.name = 'Market';
          //   column.isIconOnly = true;
          //   column.iconName = 'Page';
          column.isSorted = sorted;
          column.isSortedDescending = sortedDescending;
          column.isFiltered = filtered;
          column.onColumnContextMenu = onColumnContextMenu;
          column.onColumnClick = onColumnClick;
          break;
        }
        case 'tradeId': {
          column.name = 'Trade Id';
          break;
        }
        case 'underlying': {
          column.name = 'Underlying';
          break;
        }
        case 'tso': {
          column.name = 'TSO';
          break;
        }
        case 'bs': {
          column.name = 'B/S';
          break;
        }
        case 'quantity': {
          column.name = 'Quantity';
          break;
        }
        case 'price': {
          column.name = 'Price';
          break;
        }
        case 'currency': {
          column.name = 'Currency';
          break;
        }
        case 'tradeTimeUtc': {
          column.name = 'Trade Time UTC';
          break;
        }
        case 'portfolio': {
          column.name = 'Portfolio';
          break;
        }
        case 'text': {
          column.name = 'Text';
          break;
        }
        case 'info': {
          column.name = 'Info';
          break;
        }
        default:
          break;
      }
    }
    return columns;
  });

  // update list on mount and when selected updateInterval changes
  useEffect(() => {
    // update to selected interval 
    const updateInterval = setInterval(() => {
      setItems((items) => updateItemsRandomly([...items]))
      // console.log(updateIntervalInMilliSeconds)
      // console.log(items.filter(item => item.updated))
    }, updateIntervalInMilliSeconds)
    return () => clearInterval(updateInterval)
  }, [updateIntervalInMilliSeconds])

  return (
    <>
      <DetailsList
        items={items}
        columns={columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.justified}
        selectionPreservedOnEmptyClick={true}
        ariaLabelForSelectionColumn="Toggle selection"
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        checkButtonAriaLabel="Row checkbox"
        onRenderDetailsHeader={renderDetailsHeader}
        onRenderRow={onRenderRow}
        onRenderItemColumn={renderItemColumn}
      />
      {contextualMenuProps && <ContextualMenu {...contextualMenuProps} />}
    </>
  );
};
