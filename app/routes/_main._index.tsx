import { Link } from "@remix-run/react";
import home from "../assets/home.jpg";

export default function Home() {
  return (
    <div className="pb-[20px]">
      <div className="relative w-[100%] h-[800px] mb-[30px] overflow-hidden">
        <img src={home} alt="" />
        <div className="absolute top-[200px] left-[100px]">
          <div className="text-blue-500 font-bold text-[60px]">
            Remix Antd Admin
          </div>
          <div className="text-gray-300 text-[20px]">
            一个使用了 Remix 作为技术栈的模板
          </div>
          <button className="text-gray-300 text-[20px]  leading-[40px] bg-blue-500 px-[30px] font-[20px]">
            <Link to="/production">更多</Link>
          </button>
        </div>
      </div>
      <div>
        <div className="text-center font-extrabold">产品服务</div>
        <div className="flex flex-wrap">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center py-[20px] bg-gray-100 basis-[50%]"
              >
                <div className="relative w-[300px]  overflow-hidden">
                  <img src={home} alt={item.toString()} />
                </div>
                <div>产品 {item}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center">新闻动态</div>
        <div className="flex">
          <div className="flex flex-1 justify-center content-center">
            <div className="w-[680px] h-[440px] overflow-hidden">
              <img className="w-[100%] h-[100%]" src={home} alt="" />
            </div>
          </div>
          <div className="flex-1">
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <div className="flex mb-[14px]" key={index}>
                  <div className="w-[100px] h-[100px]">
                    <img className="w-[100%] h-[100%]" src={home} alt="" />
                  </div>
                  <div className="ml-[10px] py-[10px] h-[100px] w-[500px] leading-[30px] text-lg">
                    sdfsdfsdsdfsdfsdfsfsf sdfsf sdfsfsdfsdfsdfsd sdfsfsdf sddfs
                    sdfsd sdfsfssdf sdfsf sdfsdfs sd sdfsfsd sdsf sf sd sdfs fsf
                    sfs dfsf sdf sd
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">更多</div>
        <div className="flex flex-col">
          <div className="relative flex justify-center items-center">
            <div className="absolute top-0 w-[90%] h-[300px] overflow-hidden">
              <img src={home} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center w-[1200px] h-[300px] z-10">
              <div className="mb-[10px] text-[20px] leading-[20px] text-gray-100">
                关于我们
              </div>
              <div className="m-[40px] text-[20px] leading-[20px] text-gray-100">
                abcdeft
              </div>
              <button className="leading-[30px] h-[30px] w-[100px]">
                更多
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] mx-auto my-0 mt-[10px] justify-between">
          <div className="basis-[33%] overflow-hidden relative">
            <div className="absolute top-0 w-[100%] h-[200px]">
              <img className="w-[100%] h-[100%]" src={home} alt="" />
            </div>
            <div className="relative flex justify-center items-center w-[100%] h-[200px] text-gray-100 z-10">
              企业文化
            </div>
          </div>
          <div className="basis-[33%] overflow-hidden relative">
            <div className="absolute top-0 w-[100%] h-[200px]">
              <img className="w-[100%] h-[100%]" src={home} alt="" />
            </div>
            <div className="relative flex justify-center items-center w-[100%] h-[200px] text-gray-100 z-10">
              企业文化
            </div>
          </div>
          <div className="basis-[33%] overflow-hidden relative">
            <div className="absolute top-0 w-[100%] h-[200px]">
              <img className="w-[100%] h-[100%]" src={home} alt="" />
            </div>
            <div className="relative flex justify-center items-center w-[100%] h-[200px] text-gray-100 z-10">
              企业文化
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
