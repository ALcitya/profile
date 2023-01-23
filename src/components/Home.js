const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <a
          href="/about"
          class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 mt-48"
        >
          <span class="relative px-12 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Explore
          </span>
        </a>
      </section>
    </>
  );
};
export default Home;
