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
        <Box
          backgroundColor="primary"
          color="inverted"
          __border="none"
          __borderRadius="4px"
          padding="large"
          __fontSize="2rem"
          __cursor="pointer"
        >
          Click me
        </Box>
        <PrimaryBox>Testing again</PrimaryBox>
      </body>
    </>
  );
};
