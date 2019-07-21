import { success, failure } from "../lib/apiResponse";

export function getHello(event, context, callback) {
    console.log("event", event);
    return callback(null, success("Hello from TysonWorks"));
}
  