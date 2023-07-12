import styles from "@/styles/Login.module.css"
import Head from "next/head"
import Link from "next/link"
export default function Login(){
    return(
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.contrainer}>
                <form className={styles.form}>
                    
                    <div className={styles.title}>สมาชิก</div>
                    
                   
                    <div className={styles.email}>
                        <input type="text" placeholder="Email"></input>
                    </div>
                   
                    <div className={styles.email}>
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <div className={styles.forgot}>
                        
                        <label><input type="checkbox"></input>ดูรหัสผ่าน</label>
                        
                        <Link  href="">ลืมรหัสผ่าน?</Link>
                        
                    </div>
                   
                    <div className={styles.btn}>
                        <Link href="/register"><button className={styles.btn1}>สมัครสมาชิก</button></Link>
                        <Link href="/"><button className={styles.btn2} type="submit">เข้าสู่ระบบ</button></Link>
                    </div>
                    
                
                </form>
            </div>
        </>
    )
}