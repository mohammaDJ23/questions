import { memo } from 'react';
import { Forms, Inputs } from '../../forms/types';
import { useAction } from '../../hooks/use-actions';
import { useState } from '../../hooks/use-state';
import Modal from '../modal';

const QuestionModal = () => {
  const { showModal, onSubmit, onChange, setFormInfo } = useAction();
  const { modal, forms, loading } = useState();
  const form = forms.forms[Forms.CREATE_NEW_QUESTION];

  return (
    <Modal
      visible={modal.show}
      title={
        <div className="shadow-[0px_3px_50px_-1px_rgba(50,50,71,0.05)] bg-white flex justify-between items-center rounded-md border-b-solid border-b-2 border-b-gray-100">
          <div>
            <img
              onClick={() => showModal(false)}
              className="cursor-pointer"
              src="/svgs/close-button.svg"
              alt="close-button"
            />
          </div>

          <div className="pr-3 pt-2">
            <h6 className="font-black text-base">ایجاد سوال جدید</h6>
          </div>
        </div>
      }
      onCancel={() => showModal(false)}
      centered
      style={{ top: 20 }}
    >
      {form && (
        <div className="w-full">
          <form
            onSubmit={event => {
              event.preventDefault();
              onSubmit();
            }}
            onFocus={event => setFormInfo(Forms.CREATE_NEW_QUESTION, event.target.name)}
            className="w-full"
          >
            <div className="mb-3 text-right" dir="rtl">
              <label dir="rtl" className="text-right text-xs font-bold mb-2" htmlFor="topic">
                موضوع
              </label>
              <input
                className="border-solid border-2 border-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="topic"
                name={Inputs.TOPIC}
                value={form[Inputs.TOPIC].value}
                type="text"
                onChange={event => {
                  onChange(event.target.value);
                }}
              />
              <p className="text-red-500 text-xs italic">{form[Inputs.TOPIC].error}</p>
            </div>
            <div className="mb-6 text-right" dir="rtl">
              <label dir="rtl" className="text-right text-xs font-bold mb-2" htmlFor="question">
                متن سوال
              </label>
              <textarea
                className="border-solid border-2 border-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="question"
                rows={3}
                name={Inputs.QUESTION}
                value={form[Inputs.QUESTION].value}
                onChange={event => {
                  onChange(event.target.value);
                }}
              ></textarea>
              <p className="text-red-500 text-xs italic">{form[Inputs.QUESTION].error}</p>
            </div>

            <div>
              <button
                onClick={event => {
                  event.preventDefault();
                  onSubmit();
                }}
                disabled={
                  !forms.formValidation[Forms.CREATE_NEW_QUESTION] || loading.loadings[Forms.CREATE_NEW_QUESTION]
                }
                type="submit"
                className="primary-btn text-white text-xs mr-5 font-bold py-1.5 px-3 rounded"
              >
                ایجاد سوال
              </button>
              <button
                type="button"
                onClick={event => {
                  event.preventDefault();
                  showModal(false);
                }}
                className="only-text-btn text-xs mr-5 font-bold"
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default memo(QuestionModal);
