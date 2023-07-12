import styles from "@/styles/Register.module.css"
import Head from "next/head"
import Link from "next/link"

export default function Register(){
    return(
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className={styles.contrainer}>
                <form className={styles.form}>
                    
                    <div className={styles.title}>สมัครสมาชิก</div>
                    
                    <div className={styles.reg}>
                        <input type="text" placeholder="ชื่อผู้ใช้"></input>
                    </div>
                    
                    <div className={styles.reg}>
                        <input type="text" placeholder="อีเมล"></input>
                    </div>
                   
                    <div className={styles.reg}>
                        <input type="text" placeholder="รหัสผ่าน"></input>
                    </div>

                    <div className={styles.reg}>
                        <input type="text" placeholder="ยืนยันรหัสผ่าน"></input>
                    </div>
                   
                    <div className={styles.btn}>
                        <Link href="/register-saler"><button className={styles.btn1}>สมัครสมาชิกผู้ขาย</button></Link>
                        <Link href="/login"><button className={styles.btn2} type="submit">สมัครสมาชิก</button></Link>
                    </div>
                    
                
                </form>
            </div>
        </>
    )
}