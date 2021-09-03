import { SmallGraph } from "../components";
import { useEffect } from "react";
import { ISmallGraph } from "../types";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const TOKEN: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxLCJpYXQiOjE2MTc5NTc0NDl9.sX-phI07iNxG3SVeAhemp5v1_0GMVJB4U2qAb1gSsbk";
const httpLink = createHttpLink({
  uri: "https://pushnews.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'x-access-token': TOKEN,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// const client = new ApolloClient({
//   uri: "https://pushnews.app/graphql",
//   cache: new InMemoryCache(),
// });

const dummy: ISmallGraph = {
  color: "#FF3535",
  value: [
    10, 15, 40, 80, 23, 7, 9, 20, 40, 50, 80, 100, 120, 70, 60, 160, 180, 200,
    220, 45,
  ],
};

interface IContents {
  id: number;
  title: string;
}
interface IContentsData {
  articles: IContents[];
}

const ExchangeRates = () => {
  const EXCHANGE_RATES = gql`
    query Articles {
      articles {
        id
        title
      }
    }
  `;
  const { loading, error, data } = useQuery<IContentsData>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(error, data);

  return (
    <>
      {data!.articles.map(({ id, title }, key) => (
        <div key={key}>
          <p>
            {id}: {title}
          </p>
        </div>
      ))}
    </>
  );
};

const Home = () => {
  // useEffect(() => {
  //   client
  //     .query({
  //       // query: gql`
  //       //   query GetRates {
  //       //     rates(currency: "USD") {
  //       //       currency
  //       //     }
  //       //   }
  //       // `,
  //       query: gql`
  //         query {
  //           articles {
  //             id
  //             title
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => console.log("result", result));
  // }, []);

  return (
    <ApolloProvider client={client}>
      <SmallGraph color={dummy.color} value={dummy.value}  />
      <SmallGraph color={dummy.color} value={dummy.value} />
      <ExchangeRates />
      {/* <iframe id="tradingview_25807" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_25807&amp;symbol=KRX%3A005930&amp;interval=D&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=light&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=kr&amp;utm_source=bk.pushnews.ai&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=KRX%3A005930" style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""></iframe> */}
    </ApolloProvider>
  );
};

export default Home;
