const Modal = ({ restart, togglePage }) => {
  return (
    <div class="relative z-10">
      <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-hidden">
        <div class="flex min-h-full justify-center p-4 text-center items-center">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-sm">
            <div class="bg-amber-200 px-4 pb-4 pt-5  ">
              <div class="mt-3 text-center  ">
                <h1 class="text-3xl uppercase  font-bold  text-gray-900">Game Over</h1>
              </div>
            </div>
            <div class="bg-amber-200 px-4 py-3  ">
              <button
                onClick={restart}
                type="button"
                class="inline-flex w-full uppercase justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 "
              >
                Play Again
              </button>
              <button
                onClick={togglePage}
                type="button"
                class="inline-flex my-2 w-full uppercase justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
              >
                Back to Main
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
