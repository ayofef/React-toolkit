import React from "react";

const Section = ({ title, desc, children }) => (
    <div>
        <p>{title}</p>
        <p>{desc}</p>
        <>{children}</>
    </div>
);

const FOO = ({ desc }) => <div>THis is foo component || {desc}</div>;

const BAA = ({ desc }) => <div>THis is baa component || {desc}</div>;

const SAA = ({ desc }) => <div>THis is saa component || {desc}</div>;

const data = [
    {
        id: "jdks8930",
        title: "foo",
        desc: "foos's desc",
        component: FOO,
    },
    {
        id: "09909ssxz999",
        title: "baa",
        desc: "baas's desc",
        component: BAA,
    },
    {
        id: "2222t65656",
        title: "saa",
        desc: "saas's desc",
        component: SAA,
    },
];

function App() {
    return (
        <div className="App">
            {data.map((el) => (
                <Section title={el.title} desc={el.desc} key={el.id}>
                    {React.createElement(el.component, { desc: el.desc } /* , ...children if there is any */)}
                </Section>
            ))}
        </div>
    );
}

export default App;
