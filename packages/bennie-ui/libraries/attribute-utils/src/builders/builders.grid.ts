import { ComponentProperties, BuilderFunction } from "@bennie-ui/types";

export const GridBuilder: BuilderFunction = (
  properties: ComponentProperties,
) => {
  let classes = "";

  if (properties.grid) {
    classes += " grid";
    classes += GridFlowBuilder(properties);
    classes += GridGapBuilder(properties);
    classes += GridSpanBuilder(properties);
    classes += GridStartBuilder(properties);
    classes += GridTemplateBuilder(properties);
  }

  return classes;
};

export const GridTemplateBuilder = (properties: ComponentProperties) => {
  let classes = "";

  if (properties.grid?.templates) {
    if (properties.grid.templates?.rows) {
      classes += ` grid-rows-${properties.grid.templates.rows}`;
    }

    if (properties.grid.templates?.columns) {
      classes += ` grid-cols-${properties.grid.templates.columns}`;
    }
  }
  return classes;
};

export const GridGapBuilder = (properties: ComponentProperties) => {
  let classes = ""

  if(properties.grid?.gap) {
    classes += ` gap-${properties.grid.gap}`
  }
  return classes;
}

export const GridSpanBuilder = (properties: ComponentProperties) => {
  let classes = ""

  if(properties.grid?.span) {
    if (properties.grid.span?.rows) {
      classes += ` row-span-${properties.grid.span.rows}`;
    }

    if (properties.grid.span?.columns) {
      classes += ` col-span-${properties.grid.span.columns}`;
    }
  }
  return classes;
}

export const GridStartBuilder = (properties: ComponentProperties) => {
  let classes = ""

  if(properties.grid?.start) {
    if (properties.grid.start?.rows) {
      classes += ` row-start-${properties.grid.start.rows}`;
    }

    if (properties.grid.start?.columns) {
      classes += ` col-start-${properties.grid.start.columns}`;
    }
  }
  return classes;
}


export const GridFlowBuilder = (properties: ComponentProperties) => {
  let classes = "";

  if (properties.grid?.flow) {
    classes += ` grid-flow-${properties.grid.flow}`;
  }
  return classes;
};
