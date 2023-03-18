import React from "react";
import "./Welbex.scss";

export const Welbex = () => {
  return (
    <div className="welbex">
      <div className="welbex__title">
        <h1>
          Зарабатывайте больше <span>с WELBEX</span>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>

      <div className="welbex__consultant">
        <h1>
          Вместе с <span>бесплатной консультацией </span> мы дарим:
        </h1>
        <div className="consultant-dashboard">
          <div>
            <h4>Виджеты</h4>
            <p>30 готовых решений</p>
          </div>
          <div>
            <h4>Dashboard</h4>
            <p>с показателями вашего бизнеса</p>
          </div>
          <div>
            <h4>Skype Аудит</h4>
            <p>отдела продаж и CRM системы</p>
          </div>
          <div>
            <h4>35 дней</h4>
            <p>использования CRM</p>
          </div>
        </div>
        <div className="consultant-dashboard-small">
          <div>
            <svg
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.5"
                x2="10"
                y2="0.5"
                stroke="url(#paint0_linear_0_99)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>

            <span>Skype аудит</span>
          </div>
          <div>
            <svg
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.5"
                x2="10"
                y2="0.5"
                stroke="url(#paint0_linear_0_99)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>

            <span>30 виджетов</span>
          </div>
          <div>
            <svg
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.5"
                x2="10"
                y2="0.5"
                stroke="url(#paint0_linear_0_99)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>

            <span>Dashboard</span>
          </div>
          <div>
            <svg
              width="10"
              height="1"
              viewBox="0 0 10 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.5"
                x2="10"
                y2="0.5"
                stroke="url(#paint0_linear_0_99)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_99"
                  x1="-5.02155e-08"
                  y1="1.52942"
                  x2="10"
                  y2="1.52942"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.369906" stop-color="#FCB045" />
                  <stop offset="1" stop-color="#FD1D1D" />
                </linearGradient>
              </defs>
            </svg>

            <span>Месяц аmoCRM</span>
          </div>
        </div>
        <a href="#" className="button">
          Получить консультацию
        </a>
      </div>
    </div>
  );
};
