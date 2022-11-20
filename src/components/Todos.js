import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);
    
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getAllTodos());
    }, []);

    return (
        <div>
            <h1>Todo App</h1>
            { isLoading && <h3>Loading..........</h3>}
            { error && <h3>{error.message}</h3>}

            <section>
                {
                    todos && todos.map((todo)=> {
                        // const { id, title } = todo;
                        return <article>
                            <h4>{todo.id}</h4>
                            <h4>{todo.title}</h4>
                        </article>
                    })
                }
            </section>

        </div>
    );
};

export default Todos;