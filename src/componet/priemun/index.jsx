import Button from "../button";

export default function Priemun(){
    return(
        <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl  border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5 text-[color:var(--color-base)]">
            <h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
            <p className="text-[15px] leading-5 font-bold">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı 
            kazan kazan.</p>
           <div className="sefl-start">
           <Button size="normal">Abone ol</Button>

           </div>

        </section>
    )
}