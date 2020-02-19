import { RouteConfig as RouteCon } from "react-router-config";

// 路由元属性， 可扩展
export interface Meta {
    title: string,
}

export interface RouteConfig extends RouteCon {
    meta: Meta,
    routes?: RouteConfig[]
}