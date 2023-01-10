import { AppLayout } from "@cloudscape-design/components"
import { Navigation } from "../app/navigation"
import { Content } from "./content"

export const HomePage = () => {
  return (
    <AppLayout
      content={<Content />}
      disableContentPaddings={true}
      navigation={<Navigation />}
      toolsHide
    />
  )
}
