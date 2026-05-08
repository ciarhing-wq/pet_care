"use client";

import { FormEvent, useState } from "react";

export function BookingForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("预约信息已记录，门店会在营业时间内电话确认。");
  }

  return (
    <form className="booking-panel" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          主人姓名
          <input type="text" name="name" placeholder="例如：林女士" />
        </label>
        <label>
          联系电话
          <input type="tel" name="phone" placeholder="手机号码" />
        </label>
        <label>
          宠物类型
          <select name="pet" defaultValue="狗狗">
            <option>狗狗</option>
            <option>猫咪</option>
            <option>其他小宠</option>
          </select>
        </label>
        <label>
          预约项目
          <select name="service" defaultValue="基础洗护">
            <option>基础洗护</option>
            <option>全护套餐</option>
            <option>美容造型</option>
            <option>除结梳毛</option>
          </select>
        </label>
        <label>
          预约日期
          <input type="date" name="date" />
        </label>
        <label>
          到店时段
          <select name="time" defaultValue="10:00-12:00">
            <option>10:00-12:00</option>
            <option>12:00-14:00</option>
            <option>14:00-16:00</option>
            <option>16:00-18:00</option>
            <option>18:00-20:00</option>
          </select>
        </label>
        <label className="full">
          备注
          <textarea
            name="note"
            placeholder="例如：胆小、皮肤敏感、毛结较多、需要接送"
          />
        </label>
      </div>
      <p className="form-note">提交后门店会在营业时间内电话确认。</p>
      <button className="button" type="submit">
        提交预约
      </button>
      {message ? (
        <p className="form-feedback" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
