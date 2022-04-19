import { FC } from 'react';
import { useAction } from '../../hooks/use-actions';
import { useState } from '../../hooks/use-state';
import { Forms, Inputs } from '../../forms/types';

const CreateComment: FC = () => {
  const { onChange, onSubmit } = useAction();
  const { forms } = useState();
  const form = forms.forms[Forms.CREATE_NEW_COMMENT];

  return (
    <>
      {form && (
        <div dir="rtl">
          <div>
            <h3 className="text-xl font-bold">پاسخ خود را ثبت کنید</h3>
          </div>

          <div>
            <div className="mb-6 text-right" dir="rtl">
              <label dir="rtl" className="text-right text-xs font-bold mb-2" htmlFor="replay">
                پاسخ خود را بنویسید
              </label>
              <textarea
                className="border-solid border-2 border-gray-100 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="replay"
                rows={10}
                value={form[Inputs.COMMENT].value}
                onChange={event => {
                  onChange(Forms.CREATE_NEW_COMMENT, Inputs.COMMENT, event.target.value);
                }}
              ></textarea>
              <p className="text-red-500 text-xs italic">{form[Inputs.COMMENT].error}</p>
            </div>
          </div>

          <div>
            <button
              onClick={event => {
                event.preventDefault();
                onSubmit(Forms.CREATE_NEW_COMMENT);
              }}
              disabled={!forms.formValidation[Forms.CREATE_NEW_COMMENT]}
              type="submit"
              className="primary-btn text-white text-xs text-xl font-bold py-2 px-20 rounded"
            >
              ارسال پاسخ
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateComment;