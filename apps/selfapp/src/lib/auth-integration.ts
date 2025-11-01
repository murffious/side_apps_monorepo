/**
 * Standalone Authentication Stub
 *
 * This is a simplified auth integration for running outside of CREAO.ai platform.
 * It provides mock authentication for local development with full compatibility.
 */

interface AuthState {
	token: string | null;
	status: "authenticated" | "unauthenticated" | "invalid_token" | "loading";
	parentOrigin: string | null;
}

class AuthIntegration {
	private state: AuthState = {
		token: import.meta.env.VITE_DEV_AUTH_TOKEN || "local-dev-token",
		status: "authenticated",
		parentOrigin: null,
	};

	private listeners: Set<(state: AuthState) => void> = new Set();

	constructor() {
		// In standalone mode, immediately mark as authenticated
		console.log("Running in standalone mode - auth bypassed");
		console.log("Using dev token:", this.state.token === "local-dev-token" ? "default" : "from environment");
	}

	private async initialize(): Promise<void> {
		// No-op for standalone mode
		return Promise.resolve();
	}

	public async waitForInitialization(): Promise<void> {
		return Promise.resolve();
	}

	public getAuthToken(): string | null {
		return this.state.token;
	}

	public getAuthStatus(): AuthState["status"] {
		return this.state.status;
	}

	public getAuthState(): AuthState {
		return { ...this.state };
	}

	public addAuthListener(callback: (state: AuthState) => void): () => void {
		this.listeners.add(callback);
		callback(this.getAuthState());

		return () => {
			this.listeners.delete(callback);
		};
	}

	// Additional helper methods for compatibility
	public isAuthenticatedSync(): boolean {
		return this.state.status === "authenticated";
	}

	public hasInvalidToken(): boolean {
		return this.state.status === "invalid_token";
	}

	public hasNoToken(): boolean {
		return this.state.token === null;
	}

	public isLoading(): boolean {
		return this.state.status === "loading";
	}

	public clearAuth(): void {
		this.state = {
			token: null,
			status: "unauthenticated",
			parentOrigin: null,
		};
		this.notifyListeners();
	}

	public createAuthenticatedFetch(): typeof fetch {
		const token = this.getAuthToken();
		return (input: RequestInfo | URL, init?: RequestInit) => {
			const headers = new Headers(init?.headers);
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return fetch(input, { ...init, headers });
		};
	}

	private notifyListeners(): void {
		const state = this.getAuthState();
		this.listeners.forEach((listener) => listener(state));
	}
}

// Create singleton instance
const authIntegration = new AuthIntegration();

/**
 * Initialize auth integration (no-op in standalone mode)
 */
export function initializeAuthIntegration(): Promise<void> {
	return authIntegration.waitForInitialization();
}

/**
 * Get the current authentication token
 */
export function getAuthToken(): string | null {
	return authIntegration.getAuthToken();
}

/**
 * Get the current authentication status
 */
export function getAuthStatus(): AuthState["status"] {
	return authIntegration.getAuthStatus();
}

/**
 * Get the full authentication state
 */
export function getAuthState(): AuthState {
	return authIntegration.getAuthState();
}

/**
 * Subscribe to authentication state changes
 */
export function addAuthListener(
	callback: (state: AuthState) => void,
): () => void {
	return authIntegration.addAuthListener(callback);
}

// Alias for compatibility
export const addAuthStateListener = addAuthListener;

/**
 * Check if authenticated synchronously
 */
export function isAuthenticatedSync(): boolean {
	return authIntegration.isAuthenticatedSync();
}

/**
 * Check if token is invalid
 */
export function hasInvalidToken(): boolean {
	return authIntegration.hasInvalidToken();
}

/**
 * Check if no token is present
 */
export function hasNoToken(): boolean {
	return authIntegration.hasNoToken();
}

/**
 * Check if auth is loading
 */
export function isLoading(): boolean {
	return authIntegration.isLoading();
}

/**
 * Clear authentication
 */
export function clearAuth(): void {
	authIntegration.clearAuth();
}

/**
 * Create an authenticated fetch function
 */
export function createAuthenticatedFetch(): typeof fetch {
	return authIntegration.createAuthenticatedFetch();
}

// Export default for convenience
export default authIntegration;
