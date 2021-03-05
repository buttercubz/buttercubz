/**
 * Copyright (c) Crew Dev.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const install = async (name: string, url: string) => {
  const process = Deno.run({
    cmd: [
      ...`${Deno.execPath()} install -A -f -r --no-check --unstable -n ${name} ${url}`.split(
        " "
      ),
    ],
  });

  return (await process.status()).success;
};

async function Main() {
  try {
    await install("snel", "https://deno.land/x/snel/cli.ts");
    await install("trex", "https://raw.githubusercontent.com/crewdevio/Trex/dev/cli.ts");
    await install("bundler", "https://deno.land/x/bundler@0.5.1/cli.ts");
  } catch (error: any) {
    console.log(error?.message);
  }
}

if (import.meta.main) {
  await Main();
  console.clear();
}
