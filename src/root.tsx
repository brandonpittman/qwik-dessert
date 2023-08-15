import { PrimaryBox } from "./atoms.css";
import { Box } from "./Box";
Box;
export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Box as="button" color="primary">
          hi there
        </Box>
        <PrimaryBox>Testing again</PrimaryBox>
      </body>
    </>
  );
};
