import { a as o } from "./fabric-BDkbBaU4.js";
import { bx as n } from "./main-DHMhSwB4.js";
class m extends n {
  get config() {
    return this.$iApi.fixture.get("export").config?.map;
  }
  async make(e) {
    const a = await this.$iApi.geo.map.takeScreenshot({
      quality: 1,
      format: "png"
    }), t = new Image();
    t.src = a.dataUrl;
    const i = await new Promise(
      (r) => t.onload = () => r(t)
    );
    return new o.fabric.Image(i, e);
  }
}
export {
  m as default
};
//# sourceMappingURL=index-H6fvavMY.js.map
