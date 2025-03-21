import { AssistantCloudAPI, AssistantCloudConfig } from "./AssistantCloudAPI";
import { AssistantCloudAuthTokens } from "./AssistantCloudAuthTokens";
import { AssistantCloudRuns } from "./AssistantCloudRuns";
import { AssistantCloudThreads } from "./AssistantCloudThreads";

export class AssistantCloud {
  public readonly threads;
  public readonly auth;
  public readonly runs;
  public readonly encodeMessage;
  public readonly decodeMessage;

  constructor(config: AssistantCloudConfig) {
    const api = new AssistantCloudAPI(config);
    
    // Store the custom encode/decode functions or use defaults
    this.encodeMessage = config.encodeMessage || auiV0Encode;
    this.decodeMessage = config.decodeMessage || auiV0Decode;
    
    this.threads = new AssistantCloudThreads(api, this.encodeMessage, this.decodeMessage);
    this.auth = {
      tokens: new AssistantCloudAuthTokens(api),
    };
    this.runs = new AssistantCloudRuns(api);
  }
}
