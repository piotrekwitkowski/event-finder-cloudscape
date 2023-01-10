import { Header, Table } from "@cloudscape-design/components";

export const Content = () => {
  return (
    <Table
      stickyHeader
      header={<Header>Environment variables</Header>}
      columnDefinitions={[
        { id: "key", header: "Key", cell: item => item[0] },
        { id: "value", header: "Value", cell: item => JSON.stringify(item[1]) }
      ]}
      items={Object.entries(import.meta.env).filter(x => x[1] !== undefined).sort()}
    />
  )
}
