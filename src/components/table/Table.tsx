import {Cell, ColumnResizeMode, flexRender, getCoreRowModel, Row, useReactTable} from '@tanstack/react-table'
import {useEffect, useState} from 'react';
import {
  BootstrapTable,
  TableBodyTd,
  TableHead,
  TableHeadTh,
  TableHeadTr,
  TableResizer,
  TableWrapper
} from '@/components/table/Table.styled';
import {useTheme} from 'styled-components';
import {TableModel} from '@/models/table/table.model';
import {CoreHeaderGroup} from '@tanstack/table-core';

const Table = (props: TableModel) => {
  
  const theme = useTheme();
  
  const [data, setData] = useState<typeof props.data>([])
  const [columns] = useState<typeof props.columnDef>(() => [ ...props.columnDef ])
  
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange')
  
  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  })
  
  useEffect(() => {
    setData(props.data)
  }, [props.data])
  
  return (
    <TableWrapper>
      <BootstrapTable
        striped bordered hover variant={theme.mode}
        size={props.size}
        {...{
          style: {
            width: table.getCenterTotalSize()
          },
        }}
      >
        <TableHead>
        {
          table.getHeaderGroups().map((headerGroup: CoreHeaderGroup<any>) => (
            <TableHeadTr key={headerGroup.id}>
              {
                headerGroup.headers.map(header => (
                  <TableHeadTh
                    {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        width: header.getSize(),
                        position: 'relative'
                      }
                    }}
                    >
                    {
                      header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )
                    }
                    <TableResizer
                      {...{
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        style: {
                          transform:
                            columnResizeMode === 'onEnd' &&
                            header.column.getIsResizing()
                              ? `translateX(${
                                table.getState().columnSizingInfo.deltaOffset
                              }px)`
                              : ''
                          ,
                        },
                      }}
                    />
                  </TableHeadTh>
                ))
              }
            </TableHeadTr>
          ))
        }
        </TableHead>
        <tbody>
        {table.getRowModel().rows.map((row: Row<any>) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell: Cell<any, unknown>) => (
              <TableBodyTd
                {...{
                  key: cell.id,
                  style: {
                    width: cell.column.getSize(),
                  },
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableBodyTd>
            ))}
          </tr>
        ))}
        </tbody>
      </BootstrapTable>
    </TableWrapper>
  )
}

export default Table
