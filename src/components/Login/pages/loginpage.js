import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom'
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_ANON_KEY)


function Loginpage() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event) => {
        if (event === 'SIGNED_IN') {
            console.log('signed in');
            navigate('/success');
        }
        else {
            console.log('signed out');
            navigate('/');
        }
    })

    return (
        <div className="App">
            <header className="App-header m-20">
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    providers={null}
                />
            </header>
        </div>
    );
}

export default Loginpage