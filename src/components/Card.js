const Card = ({ img, name, jobdesk, errorImage }) => {
  return (
    <>
      <div class="w-full max-w-[25%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-1 my-1">
        <div class="flex justify-end px-4 pt-4">
          <div
            id="dropdown"
            class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          ></div>
        </div>
        {/* Content */}
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg border-[2px] border-white"
            src={img}
            alt={errorImage}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
            {name}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {jobdesk}
          </span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href="www"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Me Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
