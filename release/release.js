import Package from '@npmcli/package-json';
const JsonFile = await Package.load('./');

const currentVer = JsonFile.content.version;
let MajorVer = Number(currentVer[0]);
let MinorVer = Number(currentVer[2]);
let PatchVer = Number(currentVer[4]);

if (PatchVer < 9) {
  PatchVer += 1;
} else if (MinorVer < 9) {
  PatchVer = 0;
  MinorVer += 1;
} else {
  PatchVer = 0;
  MinorVer = 0;
  MajorVer += 1;
}

const newReleaseVer = MajorVer + '.' + MinorVer + '.' + PatchVer + '';

const releaseVer = JsonFile.content.scripts.release.replaceAll(`${currentVer}`, `${newReleaseVer}`);

console.log(newReleaseVer);

console.log(releaseVer);

JsonFile.update({
  scripts: {
    ...JsonFile.content.scripts,
    release: `${releaseVer}`,
  },
});

JsonFile.save();
