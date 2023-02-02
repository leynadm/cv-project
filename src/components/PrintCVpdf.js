import ReactToPrint from "react-to-print";
import { useRef } from "react";
import CV from "./CV";

export default function PrintCVpdf() {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}
