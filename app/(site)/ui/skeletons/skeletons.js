export function ProjectsGridSkeleton() {
  return (
    // <section className="py-20 lg:py-25 xl:py-30">
    //     <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
         
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((project, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
          <div className="flex p-4">
            <div className="h-5 w-5 rounded-md bg-gray-200" />
            <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
          </div>
          <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
            <div className="h-7 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
   // </div></section>
  );
}

export function SingleProjectSkeleton() {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
         
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-3xl mx-auto">
              <div className="py-8">
                  <div className="h-8 w-3/4 rounded-md bg-gray-200 mb-2" />
                  <div className="h-6 w-1/2 rounded-md bg-gray-200 mb-2" />
                  <div className="h-6 w-1/4 rounded-md bg-gray-200 mb-2" />
              </div>

              <div className="h-64 w-full rounded-md bg-gray-200 mb-8" />

              <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                  <div className="h-6 w-full rounded-md bg-gray-200 mb-4" />
                  <div className="h-6 w-full rounded-md bg-gray-200 mb-4" />
                  <div className="h-6 w-full rounded-md bg-gray-200 mb-4" />
                  <div className="h-6 w-3/4 rounded-md bg-gray-200 mb-4" />
                  <div className="h-6 w-3/4 rounded-md bg-gray-200 mb-4" />
              </div>
          </div>
      </div>
      </div></section>
  );
}
