const Remark = require("remark");
const plugin = require("..");

const remark = Remark().use();

describe("Plugin without options", () => {
  it("should render links correctly", () => {
    const markdownAST = remark.parse(`[Example](https://example.com)`);
    plugin({ markdownAST });
    expect(markdownAST).toMatchSnapshot();
  });
});

describe("Plugin with prefix", () => {
  it("should render links correctly", () => {
    const markdownAST = remark.parse(`[Example](https://example.com)`);
    plugin(
      { markdownAST },
      {
        prefix: "ssh+",
      }
    );
    expect(markdownAST).toMatchSnapshot();
  });
});

describe("Plugin with suffix", () => {
  it("should render links correctly", () => {
    const markdownAST = remark.parse(`[Example](https://example.com)`);
    plugin(
      { markdownAST },
      {
        suffix: "?ref=maddhruv",
      }
    );
    expect(markdownAST).toMatchSnapshot();
  });
});

describe("Plugin with both prefix and suffix", () => {
  it("should render links correctly", () => {
    const markdownAST = remark.parse(`[Example](https://example.com)`);
    plugin(
      { markdownAST },
      {
        prefix: "ssh+",
        suffix: "?ref=maddhruv",
      }
    );
    expect(markdownAST).toMatchSnapshot();
  });
});
