import {
  buildScriptEnsuringTimIsRunning,
  checkIfTimInstalled,
  runAppleScriptSilently,
  showNotInstalledToast,
} from "./utils";

export default async () => {
  const timAvailable = await checkIfTimInstalled();
  if (!timAvailable) return showNotInstalledToast();

  const script = buildScriptEnsuringTimIsRunning(`opentaskmanager`);
  await runAppleScriptSilently(script);
};
