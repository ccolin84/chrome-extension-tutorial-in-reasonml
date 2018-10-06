let page = Document.getElementById("buttonDiv");

let kButtonColors = [|"#3aa757", "#e8453c", "#f9bb2d", "#4688f1"|];

let updateChromeStorageColor: (string, Dom.event) => unit =
  (color, _event) =>
    Chrome.Storage.Sync.set(Chrome.storageData(~color), () =>
      Js.log("color is " ++ color)
    );

Array.iter(
  color => {
    let button = Document.createElement("button");
    Element.setStyle(button, "backgroundColor", color);
    Element.addEventListener(
      button,
      "click",
      updateChromeStorageColor(color),
    );
    Element.appendChild(page, button);
  },
  kButtonColors,
);