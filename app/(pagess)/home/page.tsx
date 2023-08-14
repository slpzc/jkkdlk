"use client"

import React, {useState} from 'react';
import Slides from "@/app/components/Home/Slides";

const Page = () => {

    const [selectedQuestion, setSelectedQuestion] = useState(0)
    const Questions = [
        {
            question: "Какой мусор мы принимаем",
            answer: "На карте отображаются все виды мусора. Смотрите на карте и сдавайте использованные материал."
        },
        {
            question: "Какой мусор мы принимаем",
            answer: "На карте отображаются все виды мусора. Смотрите на карте и сдавайте использованные материал."
        },
        {
            question: "Какой мусор мы принимаем",
            answer: "На карте отображаются все виды мусора. Смотрите на карте и сдавайте использованные материал."
        }
    ]

    return (
            <div className="panel">
                <Slides/>
                <div className="mobile-wrapper">
                    <section className="events">
                        <h2 className="subtitle">Мероприятия</h2>
                        <div className="event">
                            <b>Субботник в эту субботу</b>
                            <p>Приходите 12 июля на субботник и получайте очки рейтинга.</p>
                        </div>
                    </section>
                    <section className="questions">
                        <h2 className="subtitle">FAQ</h2>
                        <div className="questions-wrapper">
                            {
                                Questions.map(({question, answer}, key) => (
                                    <div key={key} onClick={ () => setSelectedQuestion(key) } className={`question ${selectedQuestion === key ? 'active' : null}`}>
                                        <b>{question}</b>
                                        <p>{answer}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </div>
);
};

export default Page;