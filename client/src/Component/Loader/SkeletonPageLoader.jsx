export default function SkeletonPageLoader() {
  return (
    <div className="bg-gray-100 h-screen relative w-full animate-pulse">
      <div className="flex items-start w-full">
        <div className="tablet-lg:w-[115px] tablet-xl:w-[125px] tablet-largexl:w-[155px] tablet:w-0 bg-white">
          <aside className="scrollbar bg-white h-screen overflow-y-auto top-0 tablet-lg:relative tablet-lg:bg-transparent tablet-lg:block tablet-lg:z-auto">
            <div className="pb-16 h-fullbg-social-white-15 shadow tablet-lg:pb-6 tablet-lg:w-[115px] tablet-xl:w-[125px] tablet-largexl:w-[155px] mobile-sm:w-full w-full">
              <div className=" bg-social-white-15 animate-pulse h-[105px] fixed tablet-lg:w-[115px] tablet-xl:w-[125px] tablet-largexl:w-[155px] z-30 mobile-sm:w-5/12 w-6/12">
                <div className=" w-full flex justify-center items-center h-full">
                  <div className="h-[55px] w-[55px] bg-social-dark-grey-15 mt-3 animate-pulse rounded-full"></div>
                </div>
                <div className="flex flex-col gap-9">
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                  <div className="h-[80px] w-[155px] animate-plus bg-social-dark-grey-15 pr-7"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="flex flex-col w-full tablet-lg:w-[100%] tablet-xl:w-[100%] tablet-xl:px-0 h-screen pl-0 tablet-lg:space-y-4">
          <nav className="h-[105px] border-gray-200 rounded left-0 shadow-md w-full relative tablet-lg:bg-social-white-15">
            <div className=" flex h-[105px] mx-auto w-full tablet-xl:pl-[50%] pt-[1%] gap-20">
              <div className="h-[55px] w-[55px] bg-social-dark-grey-15 animate-pulse rounded-full"></div>
              <div className="h-[55px] w-[55px] bg-social-dark-grey-15 animate-pulse rounded-full"></div>
              <div className="h-[55px] w-[55px] bg-social-dark-grey-15 animate-pulse rounded-full ml-7"></div>
              <div className="h-[55px] w-48 bg-social-dark-grey-15 border-gainsbro-600 rounded-full flex items-center justify-center gap-2  cursor-pointer mr-20 "></div>
              <div className="h-[55px] w-[55px] bg-social-dark-grey-15 animate-pulse rounded-full"></div>
            </div>
          </nav>
          <div className="h-screen overflow-y-auto pb-4 mobile-sm:pb-4 pt-4 tablet:pt-8 px-[7px] mobile-sm:px-[12px] tablet-lg:px-[12px] tablet-xl:px-[23px] tablet:px-0 tablet:pb-4 tablet-lg:pt-0">
            <div className="h-full flex flex-col patientcharttablet">
              <div className="tablet:bg-white tablet-lg:bg-gray-100 bg-gray-100 mobile-sm:bg-gray-100  ">
                <div className="flex justify-between items-center flex-wrap mt-[15px] mb-[0px] px-0 tablet-lg:px-0 tablet:px-14 tablet-lg:mt-[60px] tablet-lg:mb-[0px] tablet:mt-[14px] tablet:mb-[14px] mobile-sm:mt-[2px]"></div>
              </div>
              <div className="mobile-sm:h-[85%] tablet:h-[93%] tablet-lg:h[94%] w-full patientcharttablet px-0 tablet-lg:px-0 tablet:px-4 mt-[12px]  tablet-xl:mt-0">
                <div className="patientchart h-full tablet:overflow-hidden overflow-y-auto  tablet-lg:gap-3 tablet-xl:gap-6 tablet:gap-1 ">
                  <div className="leftpatientchart bg-white animate-pluse tablet:flex tablet:flex-col h-full hidden overflow-hidden"></div>
                  <div className="rightpatientchart tablet:flex flex-col gap-3 tablet-lg:gap-3 tablet-xl:gap-6 tablet:gap-3 h-full relative">
                    <div className="upperrightpatientchart flex flex-col tablet:flex-row gap-3 tablet:gap-[24px]  h-full">
                      <div className="leftupperrightpatientchart -mt-[2px] animate-pluse"></div>
                      <div className="rightupperrightpatientchart -mt-[2px] animate-pluse"></div>
                    </div>
                    <div className="lowerrightpatientchart animate-pluse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
