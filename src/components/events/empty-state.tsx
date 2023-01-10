import { Box } from "@cloudscape-design/components";
import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: ReactNode;
  action?: ReactNode;
}

export const EmptyState = (props: Props) => {
  const { title, subtitle, action } = props;

  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" padding={{ bottom: 's' }} color="inherit">{title}</Box>
      <Box variant="p" color="inherit">{subtitle}</Box>
      {action}
    </Box>
  )
};
