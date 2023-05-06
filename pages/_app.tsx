// Copyright UlikGames 2023. All Rights Reserved.
// Project: portfolio
// Author contact: https://github.com/UlikGames
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
