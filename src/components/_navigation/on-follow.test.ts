import { vi } from 'vitest';
import { onFollow } from './on-follow';

describe('onFollow', () => {
  it('navigates to the correct URL if the link is internal and has an href', () => {
    const mockNavigate = vi.fn();
    const mockEvent = new CustomEvent('event', {
      detail: {
        external: false,
        href: '/internal-link'
      }
    });
    mockEvent.preventDefault = vi.fn();
    onFollow(mockNavigate)(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/internal-link');
  });

  it('does not navigate if the link is external', () => {
    const mockNavigate = vi.fn();
    const mockEvent = new CustomEvent('event', {
      detail: {
        external: true,
        href: 'https://some.link'
      }
    });
    mockEvent.preventDefault = vi.fn();
    onFollow(mockNavigate)(mockEvent);
    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('does not navigate if the link does not have an href', () => {
    const mockNavigate = vi.fn();
    const mockEvent = new CustomEvent('event', {
      detail: {
        external: false,
        href: ''
      }
    });
    mockEvent.preventDefault = vi.fn();
    onFollow(mockNavigate)(mockEvent);
    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});