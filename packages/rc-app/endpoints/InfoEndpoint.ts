import {
    IHttp,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import {
    ApiEndpoint,
    IApiEndpointInfo,
    IApiRequest,
    IApiResponse,
} from "@rocket.chat/apps-engine/definition/api";
import { getCallbackUrl } from "../lib/getCallbackUrl";
import { getAllowedOrigins } from "../lib/getAllowedOrigins";

export class InfoEndpoint extends ApiEndpoint {
    public path = "info";
    public example = [];

    public async get(
        request: IApiRequest,
        endpoint: IApiEndpointInfo,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence
    ): Promise<IApiResponse> {
        const readEnvironment = read.getEnvironmentReader().getSettings();
        const [
            width,
            height,
            channelName,
            anonymousMode,
            serviceName,
            client_id,
            redirect_uri,
            allowedOrigins,
        ] = await Promise.all([
            readEnvironment.getValueById("ec-width"),
            readEnvironment.getValueById("ec-height"),
            readEnvironment.getValueById("fallback-name"),
            readEnvironment.getValueById("anonymous-mode"),
            readEnvironment.getValueById("custom-oauth-name"),
            readEnvironment.getValueById("client-id"),
            readEnvironment.getValueById("client-secret"),
            getCallbackUrl(this.app),
            getAllowedOrigins(read),
        ]);
        return {
            status: 200,
            content: {
                config: {
                    serviceName,
                    client_id,
                    allowedOrigins,
                    redirect_uri,
                },
                propConfig: {
                    width,
                    height,
                    channelName,
                    anonymousMode,
                },
            },
        };
    }
}
