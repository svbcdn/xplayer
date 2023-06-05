import assert from "assert";
beforeEach(async function () {
  await wait(1000);
});

describe("aa", function () {
  it("test", async function () {
    let vv = { name: "li lei" };
    console.info(">>>vv2", vv);
    assert.deepStrictEqual(vv.name, "li lei");
  });
});
async function wait(ttl) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(undefined), ttl);
  });
}
