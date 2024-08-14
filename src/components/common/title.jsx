import { Helmet } from "react-helmet-async";
import { useMatches } from "react-router-dom";

const Title = () => {
  const matches = useMatches();

  const crumb = matches[matches.length - 1]?.handle?.crumb || "Service users";
  return (
    <Helmet>
      <title>{crumb}</title>
    </Helmet>
  );
};

export default Title;
