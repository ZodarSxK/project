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
                
                    <span className={styles.title}>สมาชิก</span>
                   
                    <div className={styles.email}>
                        <input type="text" placeholder="Email"></input>
                    </div>
                   
                    <div className={styles.pass}>
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <div className={styles.forgot}>
                        <span>
                            <input type="checkbox"></input>
                            ดูรหัสผ่าน
                        </span>
                        <Link href="">ลืมรหัสผ่าน?</Link>
                        
                    </div>
                   
                    <div className={styles.btn}>
                        <button className={styles.btn1}>สมัครสมาชิก</button>
                        <button className={styles.btn2}>เข้าสู่ระบบ</button>
                    </div>
                    
                
                </form>
            </div>
        </>
    )
}