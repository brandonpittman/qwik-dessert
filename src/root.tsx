import { PrimaryBox } from "./atoms.css";
import { Box } from "./Box";
export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Box as="input" backgroundColor="primary" color="inverted"></Box>
        <PrimaryBox>Testing again</PrimaryBox>
      </body>
    </>
  );
};
