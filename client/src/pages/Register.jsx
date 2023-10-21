import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [first_name, setfirst_name] = useState("");
	const [last_name, setlast_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [registerResult, setRegisterResult] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				"http://localhost:8000/api/users/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						first_name,
						last_name,
						email,
						password,
					}),
				}
			);

			if (response.ok) {
				const result = await response.json();
				setRegisterResult(result);
				console.log(result.message);
			} else if (response.status === 401) {
				// Handle 401 (Unauthorized) error
				const errorData = await response.json();
				console.error(errorData.message);
			} else {
				throw new Error("Registration failed");
			}
		} catch (error) {
			console.error("Error during registration:", error);
		}
	};

	return (
		<div className="mx-auto max-w-screen-xl min-h-screen px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg">
				<h1 className="text-center text-2xl font-bold text-black sm:text-3xl">
					Get started today
				</h1>

				<p className="mx-auto mt-4 max-w-md text-center italic text-gray-200">
					Our gym is equipped with the latest fitness equipment,
					ensuring you have access to everything you need for a
					successful workout. From cardio machines to strength
					training equipment, we've got it all.
				</p>

				<form
					action="/register"
					onSubmit={handleRegister}
					className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
				>
					<p className="text-center text-lg font-medium">
						Create your account or{" "}
						<Link
							to="/login"
							className="underline hover:text-yellow-500"
						>
							Login
						</Link>
					</p>

					<div>
						<label className="sr-only">First Name</label>

						<div className="relative">
							<input
								type="text"
								name="first_name"
								onChange={(e) => setfirst_name(e.target.value)}
								value={first_name}
								className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="First Name"
							/>

							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div>
						<label className="sr-only">Last Name</label>

						<div className="relative">
							<input
								type="text"
								name="last_name"
								onChange={(e) => setlast_name(e.target.value)}
								value={last_name}
								className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Last Name"
							/>

							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div>
						<label htmlFor="email" className="sr-only">
							Email
						</label>

						<div className="relative">
							<input
								type="email"
								id="email" //will look for htmlFor value
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Email"
							/>

							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
						</div>
					</div>

					<div>
						<label htmlFor="password" className="sr-only">
							Password
						</label>

						<div className="relative">
							<input
								type="password"
								id="password" //will look for htmlFor value
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Password"
							/>

							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
							</span>
						</div>
					</div>

					<button
						type="submit"
						className="block w-full rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-medium text-white"
					>
						<Link className="" to="/">
							Register
						</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
