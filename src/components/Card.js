import { Cardy } from "./styles/Card.style"
export default function Card({item:{title, id, image,body}}) {
    return (
        <Cardy>
            <div>
               <h2>{title}</h2>
               <p>{body}</p>
            </div>
            <div>
               <img src={`./images/${image}`} alt='' />
            </div>
        </Cardy>
    )
}
