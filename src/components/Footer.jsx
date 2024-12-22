function Footer() {
  return (
    <div>
        <footer id="footer" className="bg-lime-900 py-4">
            <div className="text-center text-white text-sm">
                &copy; {new Date().getFullYear()} GreenXplor. All Rights Reserved.
            </div>
        </footer>
    </div>
  )
}

export default Footer

