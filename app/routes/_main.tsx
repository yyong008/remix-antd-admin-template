import type { MetaFunction } from "@remix-run/node";
import { Link, NavLink, useLoaderData, Outlet } from "@remix-run/react";
import { getIndexData } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix antd admin template" },
    { name: "template", content: "Remix antd admin" },
  ];
};

export const loader = function () {
  return getIndexData();
};

export default function Index() {
  const data: any[] = useLoaderData();
  return (
    <div className="flex flex-col h-screen leading-[60px]">
      <div className="w-full h-[60px] flex align-center justify-between px-[60px]">
        <span className="font-bold">RAA</span>
        <span className="font-bold">
          <span className="mx-[10px]">
            <NavLink
              to="/"
              end
              className={({ isActive }) => {
                return isActive ? "text-blue-500 " : "hover:text-blue-500";
              }}
            >
              首页
            </NavLink>
          </span>
          <span className="mx-[10px] hover:text-blue-500">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-blue-500 " : "hover:text-blue-500";
              }}
              to="/production"
              end
            >
              产品
            </NavLink>
          </span>
          <span className="mx-[10px] hover:text-blue-500">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "text-blue-500 " : "hover:text-blue-500";
              }}
              to="/news"
              end
            >
              新闻
            </NavLink>
          </span>
          <span className="mx-[10px] hover:text-blue-500">
            <Link to="/about">关于</Link>
          </span>
          <span className="mx-[10px] hover:text-blue-500">
            <Link to="/join">加入我们</Link>
          </span>
        </span>
      </div>
      <div className="flex flex-col flex-1 bg-slate-300">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="h-[210px] bg-slate-600">
          <div className="flex text-slate-200">
            {data?.map((dt, index) => {
              return (
                <div key={index} className="mx-[30px]">
                  <h1 className="text-white font-bold">{dt.title}</h1>
                  <div className="text-slate-300 text-xs">
                    {dt.children.map((item: any, index: number) => {
                      return (
                        <div key={index} className="my-[10px]">
                          <Link
                            style={{
                              pointerEvents: (item.to ? "" : "none") as any,
                            }}
                            to={item.to}
                          >
                            {item.title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center text-slate-300 text-xs">
            Copyright @ {new Date().getFullYear()} RAA All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
