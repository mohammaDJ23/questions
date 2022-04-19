import { createPortal } from 'react-dom';
import { FC } from 'react';
import { useAction } from '../../hooks/use-actions';

const Header: FC = () => {
  const { showModal } = useAction();

  return createPortal(
    <div className="fixed w-full top-0 left-0 bg-white shadow-[0px_3px_50px_-1px_rgba(50,50,71,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <div className="flex justify-center items-center">
                <div className="flex-none w-14">
                  <img src="/svgs/Arrow-down.svg" alt="arrow-down" />
                </div>

                <div className="flex justify-start items-center">
                  <div className="flex-none w-28">
                    <span className="text-sm">مرضیه ابراهیمی</span>
                  </div>

                  <div className="flex-initial w-20">
                    <img src="/svgs/profile.svg" alt="profile" />
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => showModal(true)}
                    className="primary-btn text-white font-bold py-1.5 px-4 rounded"
                  >
                    سوال جدید
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <h3 className="text-xl font-bold">لیست سوالات</h3>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#header')!,
  );
};

export default Header;
