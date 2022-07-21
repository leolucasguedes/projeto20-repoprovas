import chalk from "chalk";

interface ITypes {
  [key: string]: string;
}

const types: ITypes = {
  Middleware: "magenta",
  Controller: "green",
  Repository: "blue",
  Server: "yellow",
  Service: "cyan",
  Error: "red",
};
const AppLog = (
  type:
    | "Middleware"
    | "Controller"
    | "Repository"
    | "Server"
    | "Service"
    | "Error",
  text: string
) => {
  console.log(
    chalk.bold[
      types[type] as "green" | "magenta" | "blue" | "yellow" | "cyan" | "red"
    ](`[${type}] ${text}`)
  );
};

export default AppLog;
