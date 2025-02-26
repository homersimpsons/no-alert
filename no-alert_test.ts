import { assertEquals } from "jsr:@std/assert";
import plugin from "./no-alert.ts";

Deno.test("no-alert", () => {
  const diagnostics = Deno.lint.runPlugin(plugin, "main.ts", "alert('test');");

  assertEquals(diagnostics.length, 1);
  const d = diagnostics[0];
  assertEquals(d.id, "no-alert/no-alert");
  assertEquals(d.message, "Unexpected call to `alert`");
});

Deno.test("no-confirm", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "main.ts",
    "confirm('test');",
  );

  assertEquals(diagnostics.length, 1);
  const d = diagnostics[0];
  assertEquals(d.id, "no-alert/no-alert");
  assertEquals(d.message, "Unexpected call to `confirm`");
});

Deno.test("no-prompt", () => {
  const diagnostics = Deno.lint.runPlugin(plugin, "main.ts", "prompt('test');");

  assertEquals(diagnostics.length, 1);
  const d = diagnostics[0];
  assertEquals(d.id, "no-alert/no-alert");
  assertEquals(d.message, "Unexpected call to `prompt`");
});
