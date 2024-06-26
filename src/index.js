import ReactDOM from "react-dom";

import { App } from "./App" /* exportしたコンポーネントはimportして使える */

ReactDOM.render(<App />, document.getElementById("root"));//rootはpublicのindex.htmlのdivタグを指す